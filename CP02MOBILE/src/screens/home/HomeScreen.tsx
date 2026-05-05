import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header";

export default function HomeScreen() {
  const { currentTheme } = useTheme();
  const { user, salutation } = useAuth();

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState(""); // NOVO
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMotivationalQuote();
  }, []);

  const fetchMotivationalQuote = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://api.quotable.io/random");
      const data = await response.json();

      setQuote(data.content);
      setAuthor(data.author); // NOVO
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Stay motivated and keep going!");
      setAuthor("Unknown");
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
        Seja bem vindo(a), {salutation} {user?.name}!
      </Text>

      <Text style={[styles.quoteTitle, { color: currentTheme.text }]}>
        Frase do dia:
      </Text>

      <Text style={[styles.quote, { color: currentTheme.text }]}>
        {loading ? "Loading..." : `"${quote}"`}
      </Text>

      {!loading && (
        <Text style={[styles.author, { color: currentTheme.text }]}>
          - {author}
        </Text>
      )}
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
  quoteTitle: {
    fontSize: 14,
    marginTop: 16,
    paddingHorizontal: 16,
    fontWeight: "bold",
  },
  quote: {
    fontSize: 14,
    marginTop: 10,
    paddingHorizontal: 16,
    fontStyle: "italic",
    lineHeight: 22,
  },
  author: {
    fontSize: 14,
    marginTop: 8,
    paddingHorizontal: 16,
    textAlign: "right",
    fontWeight: "600",
  },
});