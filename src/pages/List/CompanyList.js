import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Image, Input, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import locationIcon from "../../assets/svg/location.svg";
// import InfiniteScroll from "react-infinite-scroll-component";

const CompanyList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const loadMoreData = () => {
    if (loading) {
      return;
    }

    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setFilteredData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  useEffect(() => {
    setFilteredData((list) =>
      list.filter((itm) =>
        itm.name.last?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div>
      <div className="avian-list__header">
        <div>
          <b>{new Date().toDateString()}</b>
          <div>
            <Image src={locationIcon} preview={false} /> Loaction
          </div>
        </div>
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
      <div id="scrollableDiv" className="avian-list">
        <div style={{ margin: "1rem" }}>
          <Input
            type={"search"}
            value={search}
            className="search"
            placeholder={"Search..."}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 20}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      > */}
        <List
          dataSource={filteredData}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={item.name.last}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
        {/* </InfiniteScroll> */}
      </div>
    </div>
  );
};

export default CompanyList;
