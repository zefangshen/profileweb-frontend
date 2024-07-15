import Link from "next/link";
import Image from "next/image";

const Footer = ({data}) => {  
  const baseURL = process.env.BACKEND_API_URL;
  // console.log(baseURL);
  // console.log(data.weblinks);

  return (
    <footer>
      <div className="flex justify-between items-center">
        <p>
          &copy; {data.copyright_year} {data.first_name} {data.middle_name} {data.last_name}. Last updated: {data.updated_on.day}/{data.updated_on.month}/{data.updated_on.year}.
        </p>
        <ul className="flex space-x-1 items-center">
          {
            data.weblinks.map(
              (weblink: {
                id: number,
                name: string,
                url: string,
                icon: string
              }) => (
                <li key={weblink.id}>
                  <Link href={weblink.url}>
                    <Image
                      src={`${baseURL}${weblink.icon}`}
                      alt={weblink.name}
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              )
            )
          }
        </ul>
      </div>
    </footer>
  )
};

export default Footer;