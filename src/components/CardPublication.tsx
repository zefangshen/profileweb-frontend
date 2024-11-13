import {Card, CardBody, Image, Link, Button} from "@nextui-org/react";

export default function CardPublication() {
  return (
    <div
      className="border-none bg-transparent py-2"
    >
      <div>
        <div className="md:flex gap-4">
          <div>
            <Image
              isBlurred
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
          </div>
          <div>
            <p className="font-bold">Title</p>
            <p>Authors, Authors, Authors, Authors, Authors, Authors, Authors</p>
            <p>Publisher, 2024</p>
            <div className="flex gap-1">
              <Button
                href="#"
                as={Link}
                color="default"
                variant="bordered"
                size="sm"
                radius="none"
              >PDF</Button>
              <Button
                href="#"
                as={Link}
                color="default"
                variant="bordered"
                size="sm"
                radius="none"
              >Website</Button>             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
