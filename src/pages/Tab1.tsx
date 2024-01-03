import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import cover from "../Book Cover.jpg";
import callWild from "../call-wild.jpeg";
import prince from "../prince.jpeg";
import TheRoad from "../the-road.jpeg";
import { css, cx } from "../../styled-system/css";
import {
  bleed,
  shadowPart,
  hstack,
  vstack,
  aspectRatio,
} from "../../styled-system/patterns";
import { arrowForwardCircleOutline } from "ionicons/icons";
import { BlurhashImage } from "../components/BlurHash";

const src = callWild;

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader
        className={css({
          shadow: "none",
        })}
      >
        <IonToolbar
          className={css({
            "--background": "transparent",
            "--border-style": "none",
          })}
        >
          <IonTitle>Dynamic Styles Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          className={css({
            position: "relative",
          })}
        >
          <BlurhashImage
            src={src}
            className={css({
              position: "absolute",
              zIndex: -1,
              inset: 0,
              height: "100%",
              top: "-30%",
            })}
          />
          <PromotedPublicationCard />
        </div>
      </IonContent>
    </IonPage>
  );
};

const PromotedPublicationCard = () => {
  return (
    <div
      className={cx(
        vstack({
          alignItems: "stretch",
        }),
        css({
          border: "1px solid rgba(208, 213, 221, 0.4)",
          bg: "rgba(255, 255, 255, 0.8)",
          _osDark: {
            border: "1px solid rgba(208, 213, 221, 0.4)",
            bg: "rgba(0,0,0,0.8)",
          },

          borderRadius: "lg",
          margin: 6,
          padding: 4,
        })
      )}
    >
      <IonImg
        className={cx(
          shadowPart({
            part: "image",
            borderRadius: "sm",
            objectFit: "cover",
          }),
          css({
            // "&::part(image)": {
            //   borderRadius: "sm",
            //   objectFit: "cover",
            // },
            pb: 4,
            h: "280px",
            alignSelf: "center",
            aspectRatio: 633 / 1000,
          })
        )}
        src={src}
        alt="Cover"
      />
      <div className={hstack({ justifyContent: "space-between" })}>
        <div className={css({ fontWeight: "bold" })}>
          <div className={css({ fontSize: "sm" })}>
            NYPL & WYNC Book Club’s November Pick
          </div>
          <div
            className={css({
              fontSize: "2xl",
            })}
          >
            Rouge
          </div>
          <div>By Mona Awad</div>
        </div>
        <IonIcon size="large" icon={arrowForwardCircleOutline} />
      </div>
    </div>
  );
};

export default Tab1;
