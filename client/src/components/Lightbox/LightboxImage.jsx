import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import {
  Captions,
  Counter,
  Download,
  Fullscreen,
  Share,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Gallery from "../Gallery/Gallery";
import { gallery } from "../../assets/data/gallery";

const LightboxImage = () => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <Gallery onClick={(currentIndex) => setIndex(currentIndex)} />
      <Lightbox
        plugins={[Captions, Counter, Download, Fullscreen, Thumbnails, Share]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
        }}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        index={index}
        slides={gallery}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default LightboxImage;
