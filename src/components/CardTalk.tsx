import {Card, CardBody, Image, Link, Button, CardFooter} from "@nextui-org/react";

export default function CardTalk() {
  return (
    <Card
      shadow="sm" className="border-none"
    >
      <CardBody>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardFooter>
        <div>
          <Link>
            <p className="font-bold">Title Title Title Title Title</p>
          </Link>
          <p>location, date</p>
        </div>
      </CardFooter>
    </Card>
  );
}
