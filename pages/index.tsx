import Head from "next/head";
import Link from "../components/Link";

export default function Home() {
  return (
    <div className="relative flex flex-col w-screen min-h-screen overflow-x-hidden bg-indigo-200 md:justify-center md:items-center">
      <Head>
        <title>Connect with uvacoder</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/iarenotamnot/image/upload/v1634341683/kid-blue-hat.webp"
        />
      </Head>
      <div className="absolute top-[45%] left-[0%] md:left-[20%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob"></div>
      <div className="absolute top-[50%] left-[50%] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[75%] md:top-[60%] left-[10%] md:left-[30%] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-4000"></div>
      <div className="!mt-5">
        <img
          className="w-[220px] rounded-full mx-auto"
          src="https://res.cloudinary.com/iarenotamnot/image/upload/v1634341683/kid-blue-hat.webp"
          alt="uvacoder"
        />
        <h2 className="my-3 text-3xl font-bold text-center text-indigo-900 md:text-4xl">
          uvacoder
        </h2>
      </div>
      <div className="w-full max-w-lg p-6">
        
        <Link
          image="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress"
          href="https://uvacoder.hashnode.dev/"
          Name="Checkout my blogs on Hashnode"
        />
        <Link
          image="https://cdn.iconscout.com/icon/free/png-512/discord-2474808-2056094.png"
          href="https://discord.gg/e3sDQjSnDK"
          Name="Join my Discord server"
        />
        <Link
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          href="https://github.com/uvacoder"
          Name="Look at my code on Github"
        />
        <Link
          image="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          href="https://twitter.com/AlecCam43544378"
          Name="Follow me on Twitter"
        />
        <Link
          image="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png"
          href="https://www.linkedin.com/in/alecbcampbell"
          Name="Connect with me on LinkedIn"
        />
      </div>
    </div>
  );
}
