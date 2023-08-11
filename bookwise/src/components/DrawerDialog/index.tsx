import React, { ReactNode, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  DialogContent,
  DialogClose,
  BookDetailsWrapper,
  BookDetailsContainer,
  BookContent,
  BookImage,
  BookInfo,
  CategoryBox,
  TotalPagesBox,
  RatingHeader,
  Ratings,
  UserRatingHeader,
  Review,
  ReviewTextArea,
  StarContainer,
} from "./style";
import { Check, Star, X } from "phosphor-react";
import { api } from "@/lib/axios";
import { BookmarkSimple, BookOpen } from "phosphor-react";
import { relativeDateFormatter } from "@/utils/dayformatter";
import { AuthDialog } from "../AuthDialog";
import { useSession } from "next-auth/react";
import { RatedStars } from "../RatedStars";
import { z } from "zod";
import { Form, FormState, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import next from "next/types";

interface DrawerDialogProps {
  children?: ReactNode;
  bookId: string | null;
}

interface DialogProps {
  name: string | undefined;
  cover_url: string;
  id: string;
  author: string;
  total_pages: number;
  avgRating: number;
  categories: [
    categorie: {
      category: {
        name: string;
        books: [
          booksList: {
            book: {
              name: string;
            };
          }
        ];
      };
    }
  ];

  ratings: [
    rating: {
      id: string;
      description: string;
      created_at: string;
      rate: number;
      user: {
        id: string;
        name: string;
        avatar_url: string;
        email: string | undefined;
      };
    }
  ];
}
interface RatingStarsProps {
  size: number;
  rateNumber: number;
}

export function DrawerDialog({ children, bookId }: DrawerDialogProps) {
  const [BookDrawer, setBookDrawer] = useState<DialogProps | null>();
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState<boolean>();
  const [openRating, setOpenRating] = useState<boolean>(false);
  const { data: session } = useSession();
  const [Rating, SetRate] = useState<number | null>();
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const iconArray = Array.from({ length: 5 }, (_, index) => index);
  const [review, setReview] = useState<string>("");
  const [rateingRefresh, setRatingRefresh] = useState(null);

  //@ts-ignore
  const average = Math.floor(BookDrawer?.avgRating)
  const maxLength = 400;
  const [text, setText] = useState("");
  const remainingChars = maxLength - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setReview(event.target.value);
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };

  const handleClick = (index: number) => {
    SetRate(index + 1);
    setClickedIndex(index);
  };

  const handleMouseOver = (index: number) => {
    setHoverIndex(index + 1);
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  async function fetchData() {
    const response = await api.get(`books/${bookId}`);

    setBookDrawer(response.data);
  }
  const IsAlreadyRated = BookDrawer?.ratings
    .map((item) => item.user.email)
    .includes(session?.user.email);
  console.log("o cara ja deu nota?: " + IsAlreadyRated);

  function ClearState() {
    setOpen(false);
    setLoading(false);
  }
  function Open() {
    setOpen(true);

    setTimeout(() => {
      setLoading(true);
    }, 700);
  }

  async function handleCreateReview() {
    try {
      const response = await api.post(`register/${bookId}`, {
        review,
        Rating,
      });
      setRatingRefresh(response.data);
      setOpenRating(false);
    } catch (error) {
      console.error("Validation error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [bookId, setOpen, rateingRefresh]);
  const categories = BookDrawer?.categories
    ?.map((item) => item?.category?.name)
    ?.join(", ");

  const RatingNumber = BookDrawer?.ratings.length;
  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger
        asChild
        onClick={() => {
          Open();
        }}
      >
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay
          onClick={() => {
            ClearState();
            setRatingRefresh(null);
            setClickedIndex(null);
            setReview("");
            setOpenRating(false);
            setText("");
          }}
        />
        <DialogContent>
          <DialogClose>
            <X
              size={24}
              onClick={() => {
                ClearState();
                setRatingRefresh(null);
                setClickedIndex(null);
                setReview("");
                setOpenRating(false);
                setText("");
              }}
            />
          </DialogClose>
          {Loading == false ? (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
                    }
                    width={216}
                    height={304}
                  />
                  <BookContent>
                    <h1>
                      Loading...
                      <p>Loading...</p>
                    </h1>

                    <p>
                      <div>
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} />
                      </div>
                      <span>Loading... avaliações</span>
                    </p>
                  </BookContent>
                </BookDetailsContainer>
                <BookInfo>
                  <CategoryBox>
                    <BookmarkSimple size={24} />
                    <div>
                      <span>Categoria</span>
                      <p>Loading...</p>
                    </div>
                  </CategoryBox>
                  <TotalPagesBox>
                    <BookOpen size={24} />
                    <div>
                      <span>Páginas</span>
                      <p>Loading...</p>
                    </div>
                  </TotalPagesBox>
                </BookInfo>
              </BookDetailsWrapper>
              <RatingHeader>
                <div>Avaliações</div>

                <div>...</div>
              </RatingHeader>
            </>
          ) : (
            <div>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage src={BookDrawer?.cover_url} />
                  <BookContent>
                    <h1>
                      {BookDrawer?.name}
                      <p>{BookDrawer?.author}</p>
                    </h1>
                    <div className="StarContainer">
                    <RatedStars size={5} fillNumber={average} width={20} />
            
     
                      {RatingNumber == 1 ? (
                        <span>{RatingNumber} avaliação</span>
                      ) : (
                        <span>{RatingNumber} avaliações</span>
                      )}
                    </div>    
                    
                    
                  </BookContent>
                </BookDetailsContainer>
                <BookInfo>
                  <CategoryBox>
                    <BookmarkSimple size={24} />
                    <div>
                      <span>Categoria</span>
                      <p>{categories}</p>
                    </div>
                  </CategoryBox>
                  <TotalPagesBox>
                    <BookOpen size={24} />
                    <div>
                      <span>Páginas</span>
                      <p>{BookDrawer?.total_pages}</p>
                    </div>
                  </TotalPagesBox>
                </BookInfo>
              </BookDetailsWrapper>
              <RatingHeader>
                <div>Avaliações</div>
                {session && !IsAlreadyRated ? (
                  <button
                    onClick={() => {
                      setOpenRating(true);
                    }}
                  >
                    Avaliar
                  </button>
                ) : session && IsAlreadyRated ? (
                  <></>
                ) : (
                  <AuthDialog>
                    <button>Avaliar</button>
                  </AuthDialog>
                )}
              </RatingHeader>
              {openRating ? (
                <ReviewTextArea
                  as="form"
                  onSubmit={handleSubmit(handleCreateReview)}
                 
                >
                  <div className="container">
                    <div>
                      <img
                        width={40}
                        height={40}
                        src={session?.user.avatar_url}
                      />
                      <span>{session?.user.name}</span>
                    </div>
                    <StarContainer>
                      {iconArray.map((_, index) => (
                        <Star
                          key={index}
                          size={24}
                          onMouseEnter={() => handleMouseOver(index)}
                          onMouseLeave={() => handleMouseOver(-1)}
                          onClick={() => {
                            handleClick(index);
                          }}
                          weight={
                            clickedIndex !== null
                              ? index <= clickedIndex
                                ? "fill"
                                : "regular"
                              : index + 1 <= hoverIndex
                              ? "fill"
                              : "regular"
                          }
                        />
                      ))}
                    </StarContainer>
                  </div>

                  <textarea
                    placeholder="Escreva sua avaliação"
                    onChange={handleChange}
                    maxLength={maxLength}
                    rows={4}
                    cols={50}
                  />
                  <p className="RemainingChars">
                    {review.length} / {remainingChars}
                  </p>
                  <div>{errors.root?.message}</div>
                  <div className="ButtonsContainer">
                    <button
                      onClick={() => {
                        setOpenRating(false);
                        SetRate(null), setReview("");
                        setClickedIndex(null);
                      }}
                    >
                      {<X size={24} />}
                    </button>
                    <button type="submit" disabled={!review || !Rating || isSubmitting} >
                      {<Check size={24} />}
                    </button>
                  </div>
                </ReviewTextArea>
              ) : (
                <></>
              )}
              {BookDrawer?.ratings.map((item) => (
                <Ratings>
                  <UserRatingHeader>
                    <div>
                      <img src={item.user.avatar_url} width={40} height={40} />
                      <p>
                        <span>{item.user.name}</span>
                        <div>{relativeDateFormatter(item.created_at)}</div>
                      </p>
                    </div>
                    <p>
                      <RatedStars width={14} size={5} fillNumber={item.rate} />
                    </p>
                  </UserRatingHeader>

                  <Review>{item.description}</Review>
                </Ratings>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}