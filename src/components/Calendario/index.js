import React, {useState} from "react";

import {
  View,
  TouchableWithoutFeedback
} from "react-native";

import {
  Container,
  ModalContent,
  ButtonFilter,
  ButtonFilterText
} from "../../assets/styles/Calendario";

import { ptBR } from "./localeCalendar";

import {
  Calendar,
  LocaleConfig  // Serve para configurar o calendário. Conseguimos configurar no padrão brasileiro, por exemplo.
} from "react-native-calendars";

// Configurando o calendário no padrão brasileiro...
LocaleConfig.locales["pt-br"] = ptBR;  // Informa, ao calendário, que criamos padrão.
LocaleConfig.defaultLocale = "pt-br";  // Definimos o pt-BR como padrão.

export default function Calendario({setVisible, handleFilter}) {
  const [dateNow, setDateNow] = useState(new Date());
  const [markeddates, setMarkedDates] = useState({});

  function handleOnDayPress(date) {
    setDateNow(new Date(date.dateString));

    let markedDay = {};

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: "#3B3DBF",
      textColor: "#FFFFFF"
    };

    setMarkedDates(markedDay);
  };

  function handleFilterDate() {
    handleFilter(dateNow);
    setVisible();
  };

  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={setVisible}
      >
        <View
          style={{
            flex: 1
          }}
        >
        </View>
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markeddates}
          enableSwipeMonths={true}  // Troca os meses.
          theme={{
            todayTextColor: "#FF0000",  // Cor do dia atual.
            // selectedDayBackgroundColor: "#00ADF5", -> Cor do fundo dia selecionado.
            selectedDayTextColor: "#FFFFFF"  // Cor do dia selecionado.
          }}
        />

        <ButtonFilter
          onPress={handleFilterDate}
        >
          <ButtonFilterText>
            Filtrar
          </ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  )
}