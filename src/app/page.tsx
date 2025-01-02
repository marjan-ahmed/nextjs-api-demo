import { BASE_API_URL } from "../../utils/constant";

export default async function Home() {
const api = await fetch(`${BASE_API_URL}/api/data`);
const data = await api.json();
console.log(api);

type TObject = {
  id: number,
  employee: string,
  age: number,
  role: string
}

if(!BASE_API_URL) {
  return null;
}

return (
  <>
    <h1 className="flex mt-20 text-3xl md:text-5xl sm:text-4xl flex-col justify-center items-center">
      Api Demo
    </h1>
  <div className="flex flex-wrap justify-center gap-5 mt-3">
    {data.map((item: TObject) => {
      return (
        <div key={item.id}>
          <div className="w-[300px] h-[200px] flex justify-center flex-col rounded-lg shadow-md bg-gray-50 dark:bg-gray-00 shadow-gray-300 p-5">
          <h1><span className="font-bold">ID:</span> {item.id}</h1>
          <p><span className="font-bold">Employee:</span> {item.employee}</p>
          <p><span className="font-bold">Age:</span> {item.age}</p>
          <p><span className="font-bold">Role:</span> {item.role}</p>
          </div>
        </div>
      );
    })}
    </div>
  </>
);
}