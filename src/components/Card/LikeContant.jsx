import { Masonry } from "@mui/lab";
import { useSelector } from "react-redux";
import { ItemGridCard } from "../Item/ItemGridCard";
import { ItemLineCard } from "../Item/ItemLineCard";
import { useMemo } from "react";
import { HOME_ITEMS } from "../../data";

const LikeContant = () => {
  const activeButton = useSelector((state) => state.viewToggle);
  const likedItemIds = useSelector((state) => state.data.likedItemIds);

//   const likedItems = useMemo(() => HOME_ITEMS.filter((i) => ), [likedItemIds])
  const likedItems = useMemo(() => {
	let filteredItems = []

	for (let i = 0; i < likedItemIds.length; i++) {
		for (let j = 0; j < HOME_ITEMS.length; j++) {
			if (likedItemIds[i] === HOME_ITEMS[j].id) {
				filteredItems.push(HOME_ITEMS[j])
			}
		}
	}

	return filteredItems
  }, [likedItemIds])

  console.log(likedItems)

  return (
    <div className="flex flex-col gap-y-6">
      <h1 className="text-5xl font-bold">This Is Like Page</h1>

      {activeButton === "grid" ? (
        <Masonry columns={3} spacing={3}>
          {likedItems.map((item) => (
            <ItemGridCard key={item.id} item={item} />
          ))}
        </Masonry>
      ) : (
        // Menu View is heare
        <div className="w-full">
          {likedItems.map((item) => (
            <ItemLineCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikeContant;
