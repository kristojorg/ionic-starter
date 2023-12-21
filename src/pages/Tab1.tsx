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

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader
        className={css({
          shadow: "none!",
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
        <IonHeader collapse="condense">
          {/* <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar> */}
        </IonHeader>
        <div
          className={css({
            position: "relative",
            zIndex: 0,
          })}
        >
          <BlurhashImage
            src={cover}
            className={css({
              position: "absolute",
              zIndex: -1,
              inset: 0,
              height: "100%",
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
          bg: "black",
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
            maxH: "280px",
            aspectRatio: 633 / 1000,
          }),
          css({
            pb: 4,
          })
        )}
        src={cover}
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
