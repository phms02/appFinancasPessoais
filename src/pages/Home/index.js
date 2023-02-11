import React, {
  useContext,
  useEffect,
  useState
} from "react";

import {
  TouchableOpacity,
  Modal
} from "react-native";

import {
  Background,
  ListBalance,
  Area,
  Title,
  List
} from "../../assets/styles/Home/styles";

import Header from "../../components/Header";
import BalanceItem from "../../components/BalanceItem";
import HistoricoList from "../../components/HistoricoList";
import Calendario from "../../components/Calendario";
import { AuthContext } from "../../contexts/auth";

import api from "../../services/api";

import { useIsFocused } from "@react-navigation/native";
import { format } from "date-fns";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function Home() {
  const isFocused = useIsFocused();

  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      // let dateFormated = format(dateMovements, "dd/MM/yyyy");
      let date = new Date(dateMovements);

      /**
        *valueOf()'=> pega a data em milissegundos.
        *'getTimezoneOffset()' => pega a diferença (em minutos) entre o time zone local (do computador, do celular) e o time zone universal (UTC).
      */
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;

      let dateFormated = format(onlyDate, "dd/MM/yyyy");

      console.log(dateFormated);


      const receives = await api.get("/receives", {
        params:{
          date: dateFormated
        }
      });

      const balance = await api.get("/balance", {
        params:{
          date: dateFormated 
        }
      });

      if(isActive) {
        setMovements(receives.data);
        setListBalance(balance.data);
      }
    };

    getMovements();

    return () => isActive = false;

  }, [isFocused, dateMovements]);

  async function handleDelete(id) {
    try {
      await api.delete("/receives/delete", {
        params: {
          item_id: id
        }
      });

      setDateMovements(new Date());
    } catch(error) {
      console.log(`Erro! ${error}`);
    };
  };

  function filterDateMovents(dateSelected) {
    setDateMovements(dateSelected);  // Filtra as movimentações a partir da data selecionada.
  };

  return (
    <Background>
      <Header
        title="Minhas movimentações"
      />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item.tag }
        renderItem={
          ({item}) => (
            <BalanceItem data={item} />
          )
      }
      />

      <Area>
        <TouchableOpacity
          onPress={
            () => setModalVisible(true)
          }
        >
          <Icon
            name="event"
            size={30}
            color="#000000"
          />
        </TouchableOpacity>

        <Title>Últimas movimentações...</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={item => item.id}
        renderItem={
          ({item}) => <HistoricoList data={item} deleteItem={handleDelete} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20
        }}
      />

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
      >
        <Calendario
          setVisible={
            () => setModalVisible(false)
          }
          handleFilter={filterDateMovents}
        />
      </Modal>
    </Background>
  )
}