import SignHeader from "@/components/common/SignHeader/SignHeader";
import SignInForm from "@/components/signInPage/SignInForm/SignInForm";
import SignFooter from "@/components/common/SignFooter/SignFooter";
import styles from "@/styles/Sign.module.css";

const SignInPage = () => {
  return (
    <div className={styles["sign_wrapper"]}>
      <SignHeader />
      <SignInForm />
      <SignFooter />
    </div>
  );
};

export default SignInPage;
