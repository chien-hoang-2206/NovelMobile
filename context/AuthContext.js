import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const initialState = {
  user: null,
  isLoading: true,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload, isLoading: false };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check AsyncStorage for user data on app start
    const checkUser = async () => {
      try {
        const userString = await AsyncStorage.getItem('user');
        if (userString) {
          const user = JSON.parse(userString);
          dispatch({ type: 'SET_USER', payload: user });
        } else {
          dispatch({ type: 'SET_USER', payload: null });
        }
      } catch (error) {
        console.error('Error checking user from AsyncStorage:', error);
      }
    };

    checkUser();
  }, []);

  const setUser = async (user) => {
    try {
      if (user) {
        // Save user data to AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        // Remove user data from AsyncStorage
        await AsyncStorage.removeItem('user');
      }
      dispatch({ type: 'SET_USER', payload: user });
    } catch (error) {
      console.error('Error saving user to AsyncStorage:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user: state.user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
