import { useNavigation } from "react-router-dom";

export default function PageStateDetector({children}) {

    const navigation = useNavigation();

    return(
        <div className={navigation.state !== "idle" ? "opacity-50 grayscale" : ""}>
            {children}
        </div>
    );
};
