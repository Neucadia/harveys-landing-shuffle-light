import React from "react";

const logos = [
  {
    name: "tiller",
  },
  {
    name: "script",
  },
];

export default function IndexSectionFeaturesWhitePattern2() {
  const [activeLogo, setActiveLogo] = React.useState(logos[0]);
  return (
    <React.Fragment>
      <>
        <section
          className="py-24 md:pb-32 bg-white"
          style={{
            backgroundImage:
              'url("https://static.shuffle.dev/uploads/files/2a/2af2f6ccb2f3ae14dd91f253dbd82596e5221a24/farmer3.png")',
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="md:max-w-4xl mb-12 mx-auto text-center">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 bg-green-100 font-medium uppercase rounded-full shadow-sm text-green-700">
                OUR BRANDS
              </span>
              <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
                Five flexible divisions to cover every acre of the ag landscape
              </h1>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                Cross-functional and relationship-focused value propositions
                from Mid-Michigan's leading supplier
              </p>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center rounded-md hover:shadow-xl transition duration-200 hover:bg-white">
                  {/* eslint-disable-next-line */}
                  <a
                    onClick={() =>
                      setActiveLogo(
                        logos[
                          logos.findIndex(
                            (logo) => logo.name !== activeLogo.name
                          )
                        ]
                      )
                    }
                  >
                    <img
                      src={`/flex-ui-assets/logos/harveys-${activeLogo.name}-store.png`}
                      alt="Harvey's Store"
                    />
                  </a>
                  <p className="text-coolGray-500 font-medium">
                    Workwear, footwear, premium lifestyle clothing, pet and
                    birdfeeder supplies, &amp; much more.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  {/* eslint-disable-next-line */}
                  <a
                    onClick={() =>
                      setActiveLogo(
                        logos[
                          logos.findIndex(
                            (logo) => logo.name !== activeLogo.name
                          )
                        ]
                      )
                    }
                  >
                    <img
                      src={`/flex-ui-assets/logos/harveys-${activeLogo.name}-commodities.png`}
                      alt="Harvey's Commodites"
                    />
                  </a>
                  <p className="text-coolGray-500 font-medium">
                    Livestock feed merchandising, freight brokerage, end-to-end
                    logistics.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  {/* eslint-disable-next-line */}
                  <a
                    onClick={() =>
                      setActiveLogo(
                        logos[
                          logos.findIndex(
                            (logo) => logo.name !== activeLogo.name
                          )
                        ]
                      )
                    }
                  >
                    <img
                      src={`/flex-ui-assets/logos/harveys-${activeLogo.name}-feed.png`}
                      alt="Harvey's Feed"
                    />
                  </a>
                  <p className="text-coolGray-500 font-medium">
                    Calf, cattle, dairy, equine, goat, poultry, rabbit, swine
                    custom mixes and stock mixes.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  {/* eslint-disable-next-line */}
                  <a
                    onClick={() =>
                      setActiveLogo(
                        logos[
                          logos.findIndex(
                            (logo) => logo.name !== activeLogo.name
                          )
                        ]
                      )
                    }
                  >
                    <img
                      src={`/flex-ui-assets/logos/harveys-${activeLogo.name}-gc.png`}
                      alt="Harvey's Garden Center"
                    />
                  </a>
                  <p className="text-coolGray-500 font-medium">
                    Seasonal fertilizer, soil, annuals, perennials, shrubs,
                    trees, and much more.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  {/* eslint-disable-next-line */}
                  <a
                    onClick={() =>
                      setActiveLogo(
                        logos[
                          logos.findIndex(
                            (logo) => logo.name !== activeLogo.name
                          )
                        ]
                      )
                    }
                  >
                    <img
                      src={`/flex-ui-assets/logos/harveys-${activeLogo.name}-seed.png`}
                      alt="Harvey's Seed"
                    />
                  </a>
                  <p className="text-coolGray-500 font-medium">
                    Alfalfa, corn, soybeans, silage, wheat, and a full catalogue
                    of cover cropping and food plot solutions.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4"></div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
