import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Dial = () => {
  return (
    <View style={styles.dial}>
      <View style={styles.dialBackground} />
      <View style={[styles.hourframe, styles.hourframePosition]}>
        <View style={[styles.hourset, styles.hoursetPosition]}>
          <Text style={styles.hourTypo}>11</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>01</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>02</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>03</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>04</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>05</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>06</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>07</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>08</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>09</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>10</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>11</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>12</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>13</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>14</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>15</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>16</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>17</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>18</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>19</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>20</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>21</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>22</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>23</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>24</Text>
        </View>
      </View>
      <View style={[styles.miniteframe, styles.hourframePosition]}>
        <View style={[styles.minuteset, styles.hoursetPosition]}>
          <Text style={styles.hourTypo}>02</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>00</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>01</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>02</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>03</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>04</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>05</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>06</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>07</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>08</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>09</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>10</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>11</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>12</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>13</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>14</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>15</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>16</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>17</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>18</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>19</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>20</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>21</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>22</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>23</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>24</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>25</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>26</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>27</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>28</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>29</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>30</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>31</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>32</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>33</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>34</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>35</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>36</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>37</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>38</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>39</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>40</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>41</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>42</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>43</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>44</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>45</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>46</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>47</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>48</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>49</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>50</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>51</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>52</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>53</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>54</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>55</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>56</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>57</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>58</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>59</Text>
          <Text style={[styles.hour111, styles.hourTypo]}>60</Text>
        </View>
      </View>
      <Text style={styles.text}>:</Text>
      <LinearGradient
        style={styles.forgroundBottom}
        locations={[0.1, 0.25, 0.48, 0.73, 0.89]}
        colors={[
          "#fcfcfc",
          "rgba(252, 252, 252, 0.8)",
          "rgba(252, 252, 252, 0)",
          "rgba(252, 252, 252, 0.8)",
          "#fcfcfc",
        ]}
        useAngle={true}
        angle={180}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hourframePosition: {
    height: 174,
    left: "50%",
    top: 25,
    position: "absolute",
    overflow: "hidden",
  },
  hoursetPosition: {
    left: 0,
    top: "50%",
    position: "absolute",
  },
  hourTypo: {
    textAlign: "center",
    alignSelf: "stretch",
    color: Color.navy,
    fontFamily: FontFamily.font,
    fontWeight: "700",
    lineHeight: 34,
    fontSize: FontSize.size_21xl,
  },
  dialBackground: {
    height: "100.89%",
    width: "100.61%",
    top: "-0.45%",
    right: "-0.31%",
    bottom: "-0.45%",
    left: "-0.31%",
    backgroundColor: Color.gray_200,
    borderStyle: "solid",
    borderColor: "#f3f3f3",
    borderWidth: 1,
    position: "absolute",
  },
  hour111: {
    marginTop: 36,
  },
  hourset: {
    marginTop: -438,
  },
  hourframe: {
    marginLeft: -111.5,
    width: 45,
  },
  minuteset: {
    marginTop: -2118,
  },
  miniteframe: {
    marginLeft: 59.5,
    width: 53,
  },
  text: {
    marginLeft: -6.5,
    top: "42.41%",
    textAlign: "left",
    color: Color.navy,
    fontFamily: FontFamily.font,
    fontWeight: "700",
    lineHeight: 34,
    fontSize: FontSize.size_21xl,
    left: "50%",
    position: "absolute",
  },
  forgroundBottom: {
    height: "100%",
    width: "99.69%",
    top: "100%",
    right: "-99.39%",
    bottom: "-100%",
    left: "99.69%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: "transparent",
    position: "absolute",
  },
  dial: {
    borderRadius: Border.br_base,
    width: 327,
    height: 224,
    overflow: "hidden",
  },
});

export default Dial;
