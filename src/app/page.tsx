import Image from "next/image";
import Introduction from "./components/sections/Introduction";
import Layout from "./components/Layout";
export default function Home() {
  return (
    <>
      <Layout>
        <Introduction />
      </Layout>
    </>
  );
}
