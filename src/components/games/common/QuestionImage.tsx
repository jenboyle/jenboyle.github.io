import styles from "./QuestionImage.module.css";
interface QuestionImageProps {
  src: string;
}
function QuestionImage({ src }: Readonly<QuestionImageProps>) {
  return (
    <div className={styles.image}>
      <img src={src}></img>
    </div>
  );
}

export default QuestionImage;
