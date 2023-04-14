import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
const chats = [{
  id: '1',
  name: 'John Doe',
  message: 'Hey, how are you?',
  time: '10:30 AM',
  image: require('../assets/images/profile1.png')
}, {
  id: '2',
  name: 'Jane Smith',
  message: 'Can you send me the report?',
  time: 'Yesterday',
  image: require('../assets/images/profile2.png')
}, {
  id: '3',
  name: 'Bob Johnson',
  message: 'See you later!',
  time: 'Monday',
  image: require('../assets/images/profile3.png')
}];

const ChatScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.chatContainer}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
    </View>;

  return <View style={styles.container}>
      <FlatList data={chats} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20
  },
  chatContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  chatTime: {
    color: '#666'
  },
  chatMessage: {
    fontSize: 16,
    color: '#666'
  }
});
export default ChatScreen;