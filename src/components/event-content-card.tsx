import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}
export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="lg:!flex-row mb-10 lg:items-end"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="h-[32rem] max-w-[28rem] shrink-0"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="col-span-full lg:col-span-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <Typography variant="h6" color="blue-gray" className="mb-4"  style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {panel}
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4 font-medium"  style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {title}
        </Typography>
        <Typography className="mb-12 md:w-8/12 font-medium !text-gray-500"  style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {des}
        </Typography>
        <div className="flex items-center gap-4">
          <Avatar
            variant="circular"
            src="/logos/spotify-logo.png"
            alt="spotify"
            size="lg"
          />
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-0.5"  style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {name}
            </Typography>
            <Typography variant="small" className="font-Montserrat !text-gray-500">
              {position}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default EventContentCard;
