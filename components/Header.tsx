import Image from "next/image";
import Link from "next/link";
const navigation = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Dịch vụ",
    path: "/service",
  },
  {
    name: "Cách hoạt động",
    path: "/how-to-work",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Hỗ trợ",
    path: "/support",
  },
];
export default function Header() {
  return (
    <header className="flex justify-between max-w-7xl mx-auto py-4 items-center">
      <div className="flex items-center gap-1">
        <div className="border-2 border-[#e5e5e5] border-solid p-2 rounded-2xl flex items-center justify-center">
          <svg
            fill="#000000"
            height="25px"
            width="25px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 214.27 214.27"
            xmlSpace="preserve"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M196.926,55.171c-0.11-5.785-0.215-11.25-0.215-16.537c0-4.142-3.357-7.5-7.5-7.5c-32.075,0-56.496-9.218-76.852-29.01 c-2.912-2.832-7.546-2.831-10.457,0c-20.354,19.792-44.771,29.01-76.844,29.01c-4.142,0-7.5,3.358-7.5,7.5 c0,5.288-0.104,10.755-0.215,16.541c-1.028,53.836-2.436,127.567,87.331,158.682c0.796,0.276,1.626,0.414,2.456,0.414 c0.83,0,1.661-0.138,2.456-0.414C199.36,182.741,197.954,109.008,196.926,55.171z M107.131,198.812 c-76.987-27.967-75.823-89.232-74.79-143.351c0.062-3.248,0.122-6.396,0.164-9.482c30.04-1.268,54.062-10.371,74.626-28.285 c20.566,17.914,44.592,27.018,74.634,28.285c0.042,3.085,0.102,6.231,0.164,9.477C182.961,109.577,184.124,170.844,107.131,198.812 z" />{" "}
                <path d="M132.958,81.082l-36.199,36.197l-15.447-15.447c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607 l20.75,20.75c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196l41.501-41.5 c2.93-2.929,2.93-7.678,0.001-10.606C140.636,78.154,135.887,78.153,132.958,81.082z" />{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <h3 className="font-bold text-lg">SecurePay</h3>
      </div>
      <nav className="">
        <ul className="flex gap-3">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="hover:bg-[#e5e5e5] py-2 px-3 text-sm text-slate-700 rounded-md"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-3">
        <div className="py-2 text-sm px-3  border-[#e5e5e5] border-2 font-medium border-solid rounded-md text-bold text-slate-700 hover:bg-black hover:text-white hover:border-[#000]">
          Đăng nhập
        </div>
        <div className="py-2 text-sm px-3 font-medium  border-[#e5e5e5] border-solid rounded-md text-bold text-slate-700 bg-[#e5e5e5] text-center hover:bg-black hover:text-white hover:border-black">
          Tham gia
        </div>
      </div>
    </header>
  );
}
