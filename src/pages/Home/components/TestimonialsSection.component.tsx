import { useEffect, useRef, useState } from "react";
import { Badge, Button, Heading } from "../../../components/common";
import { Section } from "../../../components/layout";
import { classNames } from "../../../core/utils/classnames";

export function TestimonialsSection() {
  const [isTestimonialsCollapsed, setIsTestimonialsCollapsed] = useState(true);
  const [isShowingFooter, setIsShowingFooter] = useState(false);

  const testimonialsContainerClassName = classNames(
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden",
    isTestimonialsCollapsed && "max-h-[33rem]"
  );

  const footerClassName = classNames(
    "absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pb-8 pt-32 transition-opacity duration-300",
    !isTestimonialsCollapsed && "sticky -mt-48",
    !isTestimonialsCollapsed && !isShowingFooter && "opacity-0"
  );

  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleShowTestimonialsFooterOnScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleShowTestimonialsFooterOnScroll
      );
    };
  }, []);

  function handleShowTestimonialsFooterOnScroll() {
    if (!testimonialRef.current) {
      return;
    }

    const heightToShowFooter = 300;
    const testimonialTopOffset =
      testimonialRef.current.getBoundingClientRect().top * -1;

    console.log(testimonialTopOffset);

    if (testimonialTopOffset > heightToShowFooter) {
      setIsShowingFooter(true);
    } else {
      setIsShowingFooter(false);
    }
  }

  function handleToggleIsTestimonialsCollapsed() {
    if (!isTestimonialsCollapsed && testimonialRef.current) {
      testimonialRef.current.scrollIntoView();
    }

    setIsTestimonialsCollapsed((prev) => !prev);
  }

  return (
    <Section>
      <div className="flex flex-col items-center max-w-lg mx-auto">
        <Badge>📊 Depoimentos dos usuários</Badge>
        <Heading className="mt-6 md:mt-9" level={2}>
          O que dizem nossos usuários
        </Heading>
      </div>

      <div className="relative mt-12">
        <div ref={testimonialRef} className={testimonialsContainerClassName}>
          {[1, 2, 3].map((item) => (
            <div className="space-y-8">
              {[1, 2, 3, 4, 5, 6, 7].map((testimonial) => (
                <div className="p-6 rounded-xl border border-slate-200 ">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="https://github.com/MathPSantos.png"
                      alt="Matheus Santos"
                    />

                    <div>
                      <Heading level={4}>Matheus Santos</Heading>
                      <p className="text-sm">Desenvolvedor Frontend</p>
                    </div>
                  </div>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur efficitur ipsum eget neque consectetur, eu cursus
                    mi tincidunt.
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <footer className={footerClassName}>
          <Button onClick={handleToggleIsTestimonialsCollapsed}>
            {isTestimonialsCollapsed ? "Ver mais..." : "Ok, já entendi!"}
          </Button>
        </footer>
      </div>
    </Section>
  );
}
