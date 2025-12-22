import { Image, View, TouchableOpacity, Text } from "react-native"

import { styles } from "./styles"
import { Button } from "@/Components/Button"
import { Input } from "@/Components/Input"
import { Filter } from "@/Components/Filter"
import { FilterStatus } from "@/types/FilterStatus"
import { Item } from "@/Components/Item"


const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]



export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}
      >
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View >

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) =>
              <Filter key={status} status={status} isActive />
            )
          }
          <TouchableOpacity style={styles.clearButtom}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <Item data={{status: FilterStatus.DONE, description:'café'}}
        onStatus={() => console.log('muda status')}
        onRemove={() => console.log('remover')}/>
      </View>
    </View>
  )
}