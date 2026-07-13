import React from "react";
import Container from "../common/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    value: "shipping",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    value: "returns",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    value: "support",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    value: "student",
  },
];

const Coaching = () => {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        {/* CTA Section */}
        <div className="rounded-3xl bg-TextColor px-6 py-12 text-center text-white md:px-10 lg:px-20 lg:py-20">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            Online coaching lessons for remote learning.
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 md:text-lg lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>

          <button className="btn mt-10">
            Start learning now
          </button>
        </div>

        {/* FAQ Heading */}
        <div className="mt-16 lg:mt-24 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-10 max-w-4xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="returns"
            className="w-full space-y-4"
          >
            {accordionItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.value}
                className="rounded-xl border px-5"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-[#55EFC4] shrink-0"></span>
                    {item.title}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-6 pl-8 text-base leading-8 text-gray-600">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default Coaching;