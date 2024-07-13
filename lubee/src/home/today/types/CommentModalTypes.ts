export interface CommentModalProps {
  handleCloseBtn: () => void;
  profileIconSrc: string;
  commentText: string;
  setCommentText?: (text: string) => void;
}