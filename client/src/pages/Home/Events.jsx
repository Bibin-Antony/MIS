const Events = () => {
  const data = [
    {
      id: 1,
      title: "ES House Event: Yoga",
      day: "WED - NOV",
      date: "22",
      duration: "Duration : All day",
    },
    {
      id: 2,
      title: "ES House Event: Flag Hoisting",
      day: "WED - NOV",
      date: "23",
      duration: "Duration : 10am - 11am",
    },
    {
      id: 3,
      title: "PTM",
      day: "WED - NOV",
      date: "24",
      duration: "Duration : 10am - 2pm",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:p-20 xl:px-28 xl:gap-28 p-4 gap-4 text-textSecondary  font-semibold">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="rounded-md bg-white text-center col-span-1"
          >
            <div className="p-10">
              <h3 className="underline underline-offset-4">{item.title}</h3>
            </div>
            <div className="p-12 bg-secondary text-white">
              <span className="font-semibold">{item.day}</span>
              <h2 className="font-semibold text-7xl">{item.date}</h2>
            </div>
            <div className="p-10 ">
              <p>{item.duration}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
