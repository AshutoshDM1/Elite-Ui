import TransitionLink from "@/modules/page-transition/TransitionLink";

const PageTransition = () => {
  return (
    <div className="min-h-screen" >
      <div className="w-full flex justify-center items-center h-full" >

        <TransitionLink href="/" >Home</TransitionLink>
        <TransitionLink href="/" >Home</TransitionLink>
        <TransitionLink href="/" >Home</TransitionLink>
      </div>
    </div>
  );
};
