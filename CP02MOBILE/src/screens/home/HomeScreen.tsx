import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header";

export default function HomeScreen() {
  const { currentTheme } = useTheme();
  const { user, salutation } = useAuth();
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMotivationalQuote();
  }, []);

  const fetchMotivationalQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Stay motivated and keep going!");
    } finally {
      setLoading(false);    
    }
  };    

  return (
    <View
        style={[
            styles.container,
            { backgroundColor: currentTheme.background },
        ]}
    >
        <Header />

        <Text style={[styles.text, { color: currentTheme.text }]}>
            {salutation} {user?.name}
        </Text>

        <Text style={[styles.quote, { color: currentTheme.text }]}>
            {loading ? "Loading..." : quote}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        marginTop: 20,
        paddingHorizontal: 16,
    },
    quote: {
        fontSize: 14,
        marginTop: 16,
        paddingHorizontal: 16,
        fontStyle: "italic",
        lineHeight: 22,
    },
});