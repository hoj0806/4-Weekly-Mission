import SignHeader from "@/components/common/SignHeader/SignHeader";
import SignInForm from "@/components/signInPage/SignInForm/SignInForm";
import styles from "@/styles/Sign.module.css";
export const metadata = {
  title: "Sign in",
};
const SignInPage = () => {
  return (
    <div className={styles["sign_wrapper"]}>
      <SignHeader />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
