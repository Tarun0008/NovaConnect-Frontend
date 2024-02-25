import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";

import Advert from "scenes/widgets/ad";
import "./b.css";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box className="bomb-blast-container" height="100vh" overflow="auto">
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="1rem" // Add gap between sections
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <Box mb="2rem">
            <MyPostWidget picturePath={picturePath} />
          </Box>
          <Box mt="2rem">
            <FriendListWidget userId={_id} />
          </Box>
          <Box mt="2rem">
            <Advert />
          </Box>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
          maxHeight="calc(100vh - 0rem)" // Adjust height to fit remaining space
          overflow="auto" // Enable scrolling for posts
          paddingRight="2rem" // Add padding to create space between posts and scrollbar
        >
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <Box m="1rem 0">
              <UserWidget userId={_id} picturePath={picturePath} />
            </Box>
            <AdvertWidget />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
