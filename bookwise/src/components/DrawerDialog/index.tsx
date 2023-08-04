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
} from "./style";
import { Check, Star, X } from "phosphor-react";
import { api } from "@/lib/axios";
import { BookmarkSimple, BookOpen } from "phosphor-react";
import { relativeDateFormatter } from "@/utils/dayformatter";
import { AuthDialog } from "../AuthDialog";
import { useSession } from "next-auth/react";
import { IconArray /*RatingStars*/ } from "../RatingStars";
import { RatedStars } from "../RatedStars";
import { z } from "zod";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ratings } from "../../../prisma/constants/ratings";

interface DrawerDialogProps {
  children: ReactNode;
  bookId: string | null;
  ratingNumber: any;
}

interface DialogProps {
  name: string | undefined;
  cover_url: string;
  id: string;
  author: string;
  total_pages: number;
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
      };
    }
  ];
} 


const RatingSchema = z.object({
 // rate: z.number(),
  review: z.string().min(1).max(180),
});

type RatingData = z.infer<typeof RatingSchema>;

export function DrawerDialog({ children, bookId, ratingNumber }: DrawerDialogProps) {
  const [BookDrawer, setBookDrawer] = useState<DialogProps | null>();
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState<boolean>();
  const [openRating, setOpenRating] = useState<boolean>(false);
  const { data: session } = useSession();
  const [Rating, SetRate] = useState<number>();


  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<RatingData>({
    resolver: zodResolver(RatingSchema),
  });

  async function fetchData() {
    const response = await api.get(`books/${bookId}`);

    setBookDrawer(response.data);
    console.log(
      BookDrawer?.categories.map((item) =>
        item.category.name.split(",").join(",")
      )
    );
  }
  const handleIconClick = (index: number) => {
    SetRate(index);
    console.log("aaaaaaaa: " + index);
  };

  function ClearState() {
    setOpen(false);
    setLoading(false);
    console.log("estado limpo");
  }
  function Open() {
    setOpen(true);

    setTimeout(() => {
      setLoading(true);
    }, 200);

    console.log("estado limpo");
  }

  function handleCreateReview(data: RatingData) {
    //const Rate = data.rate;
    const Review = data.review;

    console.log("análise: " + Review, ratingNumber);
  }
  useEffect(() => {
    fetchData();
  }, [bookId, setOpen]);
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
          }}
        />
        <DialogContent>
          <DialogClose>
            <X
              size={24}
              onClick={() => {
                ClearState();
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

                <AuthDialog>
                  <div>Avaliar</div>
                </AuthDialog>
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

                    <p>
                      <div>
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} />
                      </div>
                      {RatingNumber == 1 ? (
                        <span>{RatingNumber} avaliação</span>
                      ) : (
                        <span>{RatingNumber} avaliações</span>
                      )}
                    </p>
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
                {session ? (
                  <button
                    onClick={() => {
                      setOpenRating(true);
                    }}
                  >
                    Avaliar
                  </button>
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
                  <IconArray size={5} ratesNumber={() => {handleIconClick(ratingNumber)}}/>
                  </div>

                  <textarea
                    placeholder="Escreva sua avaliação"
                    {...register("review")}
                  />
                  <div className="ButtonsContainer">
                    <button
                      onClick={() => {
                        setOpenRating(false);
                      }}
                    >
                      {<X size={24} />}
                    </button>
                    <button type="submit">{<Check size={24} />}</button>
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
                      <RatedStars size={5} fillNumber={item.rate} />
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
