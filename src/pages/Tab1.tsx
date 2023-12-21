import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import cover from "../Book Cover.jpg";
import { css, cx } from "../../styled-system/css";
import { shadowPart } from "../../styled-system/patterns";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dynamic Styles Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <IonImg
            className={cx(
              shadowPart({
                part: "image",
                borderRadius: "sm",
              }),
              css({
                padding: 16,
              })
            )}
            src={cover}
            alt="Cover"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
