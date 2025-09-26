import React, { useEffect, useState } from "react";
import { getLinkPreview } from "link-preview-js";
import { Box } from "@material-ui/core";
import { CardMedia, CardContent, Typography } from "@material-ui/core";

const Bookmark = ({ url, width="300px", height="300px" }) => {
  const [meta, setMeta] = useState({});
  useEffect(() => {
    getLinkPreview(url).then((data) => {
      setMeta(data);
    });
  }, [url]);
  return (
    <Box display="flex" bgcolor={"white"} borderRadius={"5px"} 
        sx={{ width: { xs: '100%', sm: '80%' }, cursor: "pointer"}}>
        {meta ? (
            <>
              <Box
                sx={{ 
                    flex: "3 0 auto", width: width, height: height, objectFit: "cover",
                    // padding: "15px"
                }}
                alt="Preview"
                onClick={() => window.open(url, '_blank')}
              >
                  {meta.images?.length > 0 && <img style={  {width : "100%", height: "100%"}} src={meta.images[0]}></img>}
              </Box>
            <Box flex={"7 1 auto"} sx={{ overflowWrap: "anywhere" }}
                 onClick={() => window.open(url, '_blank')}>
                <Typography variant="h6">{meta.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                            {meta.description}
                            </Typography>
                <Typography variant="caption" sx={{ color: "gray", mt: 1 }}>
                {url}
                </Typography>
            </Box>
            </>
        ) : (
            <></>
        )}
    </Box>
  );
};

export default Bookmark;
