import { Box } from "@mui/material";
import { useRouter } from 'next/router';

interface ImageProps {
  height?: number;
  width?: number;
  src: string;
  alt?: string;
}

const Image = ({ height, width, src, alt = "Image" }: ImageProps) => {
  const { basePath } = useRouter();

  return (
    <Box
      height={height ? `${height}px` : "auto"}
      width={width ? `${width}px` : "100%"}
      display="flex"
      justifyContent="start"
      alignItems="center"
      overflow="hidden"
    >
      <img
        src={`${basePath}${src}`}
        alt={alt}
        style={{
          maxHeight: height ? "100%" : "auto",
          maxWidth: "100%",
          height: height ? "100%" : "auto",
          width: width ? "100%" : "auto",
        }}
      />
    </Box>
  );
};

export default Image;