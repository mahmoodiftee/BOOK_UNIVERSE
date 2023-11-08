import React from 'react';
import {
  Document,
  Page,
  View,
  Text,
  Font,
  StyleSheet,
} from '@react-pdf/renderer';
import { useLoaderData } from 'react-router-dom';

const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#e4e4e4',
    textTransform: 'uppercase',
    fontFamily: 'Oswald',
  },
  body: {
    flexGrow: 1,
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  block: {
    flexGrow: 1,
  },
  text: {
    width: '60%',
    margin: 10,
    fontFamily: 'Oswald',
    textAlign: 'justify',
  },
  fill1: {
    width: '40%',
    backgroundColor: '#e14427',
  },
  fill2: {
    flexGrow: 2,
    backgroundColor: '#e6672d',
  },
  fill3: {
    flexGrow: 2,
    backgroundColor: '#e78632',
  },
  fill4: {
    flexGrow: 2,
    backgroundColor: '#e29e37',
  },
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const PDF = () => {
  const Book = useLoaderData();
  console.log(Book);

  const handleLink = () => {
    // Open the Book.book_link URL in a new browser tab or window
    window.open(Book.book_link, '_blank');
  };

  return (
    <div className='grid grid-cols-12 h-screen items-center gap-10'>
      <div className='col-span-4'>
        <img className='mx-auto' src={Book.img} alt="" />
      </div>
      <div className='col-span-8'>
        <Document>
          <Page size="A4">
            <View style={styles.row}>
              <Text style={styles.text}>
                {Book.book_plot}
              </Text>
              <View style={styles.fill1} />
            </View>
            <View style={styles.row}>
              <Text>
                <button onClick={handleLink} className='text-colour-50'>Click to read the whole book..</button>
              </Text>
            </View>
          </Page>
        </Document>
      </div>
    </div>
  );
};

export default PDF;
