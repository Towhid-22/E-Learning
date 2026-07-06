import React from "react";
import Container from "../common/Container";

const Success = () => {
  return (
    <section className="my-16 md:my-24 lg:my-32">
      <Container>
        <h2 className="text-center text-3xl font-bold leading-[130%] md:text-4xl lg:text-5xl">
          Our Success
        </h2>

        <p className="mt-4 text-center text-base leading-[160%] md:text-lg">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec <br className="hidden md:block" />
          nam et pharetra gravida. Adipiscing a quis ultrices eu ornare
          tristique vel nisl orci.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 text-center md:mt-16 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h4 className="text-5xl font-light text-otherTextColor md:text-6xl lg:text-8xl">
              15K+
            </h4>
            <p className="mt-2 text-lg md:text-2xl">Students</p>
          </div>

          <div>
            <h4 className="text-5xl font-light text-otherTextColor md:text-6xl lg:text-8xl">
              75%
            </h4>
            <p className="mt-2 text-lg md:text-2xl">Total success</p>
          </div>

          <div>
            <h4 className="text-5xl font-light text-otherTextColor md:text-6xl lg:text-8xl">
              35
            </h4>
            <p className="mt-2 text-lg md:text-2xl">Main questions</p>
          </div>

          <div>
            <h4 className="text-5xl font-light text-otherTextColor md:text-6xl lg:text-8xl">
              26
            </h4>
            <p className="mt-2 text-lg md:text-2xl">Chief experts</p>
          </div>

          <div>
            <h4 className="text-5xl font-light text-otherTextColor md:text-6xl lg:text-8xl">
              16
            </h4>
            <p className="mt-2 text-lg md:text-2xl">Years of experience</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Success;