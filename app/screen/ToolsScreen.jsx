import React from 'react';
import {FlatList} from 'react-native';
import {Tools} from '../config/ToolsData';
import ToolCard from '../components/ToolCard';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {AnimatedFAB} from 'react-native-paper';

export default function ToolsScreen({navigation}) {
  // const [isExtended, setIsExtended] = React.useState(true);

  // const onScroll = ({nativeEvent}) => {
  //   const currentScrollPosition =
  //     Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

  //   setIsExtended(currentScrollPosition <= 0);
  // };

  return (
    <SafeAreaView>
      <FlatList
        data={Tools}
        renderItem={({item}) => (
          <ToolCard
            navigation={navigation}
            title={item.title}
            router={item.router}
            id={item.id}
          />
        )}
        keyExtractor={item => item.id}
        // onScroll={onScroll}
      />
      {/* <AnimatedFAB
        icon="magnify"
        style={styles.fab}
        extended={isExtended}
        label="搜索"
      /> */}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   fab: {
//     bottom: 16,
//     right: 16,
//     position: 'absolute',
//   },
// });
