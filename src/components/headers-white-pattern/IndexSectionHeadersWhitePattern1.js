import React from "react";

export default function IndexSectionHeadersWhitePattern1() {
  React.useEffect(() => {
    var promise = ref.current.pause();

    if (promise !== undefined) {
      promise
        .then((_) => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          console.log(error);
        });
    }
  }, []);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const ref = React.useRef(null);

  const handleClick = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <React.Fragment>
      <>
        <section
          className="relative bg-white overflow-hidden "
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div className="bg-tarnsparent">
            {" "}
            <nav className="flex justify-between p-6 px-4">
              {" "}
              <div className="flex justify-between items-center w-full">
                {" "}
                <div className="w-1/2 xl:w-1/3">
                  {" "}
                  <a className="block max-w-max" href="#">
                    {" "}
                    <img
                      className="h-8"
                      src="https://static.shuffle.dev/uploads/files/2a/2af2f6ccb2f3ae14dd91f253dbd82596e5221a24/script-green.png"
                      alt
                    />{" "}
                  </a>{" "}
                </div>{" "}
                <div className="w-1/2">
                  {" "}
                  <ul className="hidden xl:flex xl:justify-center">
                    {" "}
                    <li className="mr-12">
                      <a
                        className="text-coolGray-500 hover:text-coolGray-900 font-medium"
                        href="#"
                      >
                        Store
                      </a>
                    </li>{" "}
                    <li className="mr-12">
                      <a
                        className="text-coolGray-500 hover:text-coolGray-900 font-medium"
                        href="#"
                      >
                        Commodities
                      </a>
                    </li>{" "}
                    <li className="mr-12">
                      <a
                        className="text-coolGray-500 hover:text-coolGray-900 font-medium"
                        href="#"
                      >
                        Seed
                      </a>
                    </li>{" "}
                    <li className="mr-12">
                      <a
                        className="text-coolGray-500 hover:text-coolGray-900 font-medium"
                        href="#"
                      >
                        Feed
                      </a>
                    </li>{" "}
                    <li>
                      <a
                        className="text-coolGray-500 hover:text-coolGray-900 font-medium"
                        href="#"
                      >
                        Garden Center
                      </a>
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
                <div className="w-1/2 xl:w-1/3" />{" "}
              </div>{" "}
              <button
                onClick={() => setNavOpen((prevState) => !prevState)}
                className="navbar-burger self-center xl:hidden"
              >
                {" "}
                <svg
                  width={35}
                  height={35}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    className="text-coolGray-50"
                    width={32}
                    height={32}
                    rx={6}
                    fill="currentColor"
                  />{" "}
                  <path
                    className="text-coolGray-500"
                    d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
                    fill="currentColor"
                  />{" "}
                </svg>{" "}
              </button>{" "}
            </nav>{" "}
            <div
              className={`navbar-menu fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50 ${
                navOpen ? `block` : `hidden`
              }`}
            >
              {" "}
              <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
                {" "}
                <nav className="relative p-6 h-full overflow-y-auto">
                  {" "}
                  <div className="flex flex-col justify-between h-full">
                    {" "}
                    <a className="inline-block" href="#">
                      {" "}
                      <img
                        className="w-48 h-auto"
                        src="https://static.shuffle.dev/uploads/files/2a/2af2f6ccb2f3ae14dd91f253dbd82596e5221a24/script-green.png"
                        alt
                      />{" "}
                    </a>{" "}
                    <ul className="py-6">
                      {" "}
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Store
                        </a>
                      </li>{" "}
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Commodities
                        </a>
                      </li>{" "}
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Feed
                        </a>
                      </li>{" "}
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Seed
                        </a>
                      </li>{" "}
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Garden Center
                        </a>
                      </li>{" "}
                    </ul>{" "}
                    <div className="flex flex-wrap" />{" "}
                  </div>{" "}
                </nav>{" "}
                <button
                  className="navbar-close absolute top-5 p-4 right-3"
                  onClick={() => setNavOpen((prevState) => !prevState)}
                >
                  {" "}
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z"
                      fill="#556987"
                    />{" "}
                  </svg>{" "}
                </button>{" "}
              </div>{" "}
            </div>
          </div>{" "}
          <div className="py-20 md:py-28">
            {" "}
            <div className="container px-4 mx-auto">
              {" "}
              <div className="flex flex-wrap xl:items-center -mx-4">
                {" "}
                <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                  {" "}
                  <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white uppercase rounded-9xl bg-green-700">
                    WELCOME TO HARVEY'S
                  </span>{" "}
                  <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                    A family of agriculture-focused companies
                  </h1>{" "}
                  <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                    Harvey's has grown from a single feed mill into a
                    multi-disciplinary group of direct-to-consumer and B2B
                    ventures
                  </p>{" "}
                  <div className="flex flex-wrap" />{" "}
                </div>{" "}
                <div className="w-full md:w-1/2 px-4">
                  {" "}
                  <div className="relative mx-auto md:mr-0 max-w-max">
                    {" "}
                    <img
                      className="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
                      src="flex-ui-assets/elements/circle3-yellow.svg"
                      alt
                    />{" "}
                    <img
                      className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                      src="flex-ui-assets/elements/dots3-blue.svg"
                      alt
                    />{" "}
                    <a onClick={handleClick}>
                      {!isPlaying ? (
                        <svg
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer text-green-700 hover:-text-green-800"
                          width={64}
                          height={64}
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <circle
                            cx={32}
                            cy={32}
                            r={32}
                            fill="currentColor"
                          />{" "}
                          <path
                            className="text-white"
                            d="M40.5 31.13L26.5 23.05C26.348 22.9622 26.1755 22.916 26 22.916C25.8245 22.916 25.652 22.9622 25.5 23.05C25.3474 23.1381 25.2208 23.265 25.133 23.4177C25.0452 23.5705 24.9993 23.7438 25 23.92V40.08C24.9993 40.2562 25.0452 40.4295 25.133 40.5822C25.2208 40.735 25.3474 40.8619 25.5 40.95C25.652 41.0378 25.8245 41.084 26 41.084C26.1755 41.084 26.348 41.0378 26.5 40.95L40.5 32.87C40.6539 32.7828 40.7819 32.6563 40.871 32.5035C40.96 32.3506 41.007 32.1769 41.007 32C41.007 31.8231 40.96 31.6494 40.871 31.4965C40.7819 31.3437 40.6539 31.2172 40.5 31.13ZM27 38.35V25.65L38 32L27 38.35Z"
                            fill="currentColor"
                          />{" "}
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={64}
                          height={64}
                          viewBox="0 0 64 64"
                          fill="none"
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer text-green-700 hover:-text-green-800 bi bi-pause"
                        >
                          {" "}
                          <circle
                            cx={32}
                            cy={32}
                            r={32}
                            fill="currentColor"
                          />{" "}
                          <g transform="translate(19, 19)">
                            <path
                              className="text-white"
                              fill="currentColor"
                              d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                            />
                          </g>
                        </svg>
                      )}
                    </a>
                    <div className="relative overflow-hidden rounded-7xl">
                      <video
                        muted
                        loop
                        poster="https://static.shuffle.dev/uploads/files/cc/cce6580999c8067e23bb4a662dea535a74b463e5/Screen-Shot-2024-09-12-at-12-19-20-PM.jpg"
                        id="bgvid"
                        ref={ref}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      >
                        <source src="bg.webm" type="video/webm" />
                        <source src="bg.mp4" type="video/mp4" />
                      </video>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
