import Container from "../Container";

export default function Footer() {
  return (
    <>
      <div className="bg-black">
        <Container wrapperClassName="py-8" className="text-white">
          footer
        </Container>
      </div>
      <div className="bg-redPrimary py-1">
        <Container className="text-center text-white text-sm">
          All rights of this site belong to Thanasir Jahangordi and Ziarati Air
          Travel Services Company.
        </Container>
      </div>
    </>
  );
}
