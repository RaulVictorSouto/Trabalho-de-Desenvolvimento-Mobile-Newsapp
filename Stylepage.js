import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   title: {
    fontSize: 25,
    marginTop: 30,
    color: '#BACBD9',
    backgroundColor: '#1E2D40',
    height: 50,
    paddingLeft: 10,
    paddingTop: 5,
    },

    container: {
        width: '95%',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BACBD9'
    },

    articleTitle:{
        fontSize: 16,
        fontWeight: "bold"
    },

    articleText:{
        fontSize:12,
    },
    
    categoriasImagem: {
        width: 70,
        height: 70,
        borderRadius: 50,
        paddingTop: 50,
        alignItems: 'center',
    },
    categoriasText:{
        fontSize: 12,
        textAlign: 'center',
    },

    categoriasBox: {
        textAlign: 'center',
        alignItems: 'center',
    },

    newsBox: {
        width: 370,
        borderRadius: 20,
        backgroundColor: '#728EA6',
        flex: 1,
        marginBottom: 2,
        marginTop: 3,
        padding: 10,
        flex: 1,
        alignSelf: 'center',
        

    },

    image:{
        width: '100%',
        height: 100,
    },

    

    

    

        
    
});

export default styles