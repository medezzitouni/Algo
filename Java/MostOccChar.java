
import java.util.HashMap;

class MostOccChar {

    public static void main(String args[]) {

        System.out.println(mostOccChar(args[0]));
    }

    public static Character mostOccChar(String phrase) {

        HashMap<Character, Integer> chars = new HashMap<Character, Integer>();
        Character mostOcc = null;

        chars.put(mostOcc, 0);

        for (char s : phrase.toCharArray()) {
            chars.put(s, chars.containsKey(s) ? chars.get(s) + 1 : 1);
            mostOcc = chars.get(s) > chars.get(mostOcc) ? s : mostOcc;
        }

        return mostOcc;
    }
}