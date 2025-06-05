export interface CardProps{
    title: string,
    content: string,
}

export interface ButtonProps{
    size: string,
    shape: string,
}

export interface PostData {
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (data: PostData) => void;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export interface PostsPageProps {
  posts: PostProps[];
}

export interface UserProps {
    name: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
}

export interface UsersPageProps {
  users: UserProps[];
}