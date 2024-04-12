import GetListApi from "@src/services/GetListApi";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Card from "./Card";
import SearchBar from "./SearchBar";
import Skeleton from "./Skeleton/Skeleton";
import SortModal from "./SortModal";

const InfiniteScroll: React.FC = () => {
  const [data, setData] = useState<object[]>([]);
  const [page, setPage] = useState(12);
  const [loading, setLoading] = useState(false);

  const [filteredItems, setFilteredItems] = useState<object[]>([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const responseData = await GetListApi.getData(page);
      setData((prevData) => [...prevData, ...responseData.data.data]);
      setPage((prevPage) => prevPage + 12);
    } catch (error) {
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading
      )
        return;
      fetchData();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="container mx-auto pb-4 px-8">
      <div className="title text-center">
        <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">
          Infinite Scroll List
        </h1>
      </div>

      <div className="md:flex border p-6 rounded-2xl shadow-sm my-5 gap-4">
        <SearchBar data={data} setFilteredItems={setFilteredItems} />

        <SortModal
          data={data}
          filteredItems={filteredItems}
          setFilteredItems={setFilteredItems}
        />
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {filteredItems.map((item: object, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
      <div className="py-8">{loading && <Skeleton />}</div>
    </div>
  );
};

export default InfiniteScroll;
