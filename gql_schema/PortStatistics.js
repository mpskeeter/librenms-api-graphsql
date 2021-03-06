  type PortStatistics {
    portId: ID!
    ifInNUcastPkts: String
    ifInNUcastPktsPrev: String
    ifInNUcastPktsDelta: String
    ifInNUcastPktsRate: Int
    ifOutNUcastPkts: String
    ifOutNUcastPktsPrev: String
    ifOutNUcastPktsDelta: String
    ifOutNUcastPktsRate: Int
    ifInDiscards: String
    ifInDiscardsPrev: String
    ifInDiscardsDelta: String
    ifInDiscardsRate: String
    ifOutDiscards: String
    ifOutDiscardsPrev: String
    ifOutDiscardsDelta: String
    ifOutDiscardsRate: Int
    ifInUnknownProtos: String
    ifInUnknownProtosPrev: String
    ifInUnknownProtosDelta: String
    ifInUnknownProtosRate: Int
    ifInBroadcastPkts: String
    ifInBroadcastPktsPrev: String
    ifInBroadcastPktsDelta: String
    ifInBroadcastPktsRate: Int
    ifOutBroadcastPkts: String
    ifOutBroadcastPktsPrev: String
    ifOutBroadcastPktsDelta: String
    ifOutBroadcastPktsRate: Int
    ifInMulticastPkts: String
    ifInMulticastPktsPrev: String
    ifInMulticastPktsDelta: String
    ifInMulticastPktsRate: Int
    ifOutMulticastPkts: String
    ifOutMulticastPktsPrev: String
    ifOutMulticastPktsDelta: String
    ifOutMulticastPktsRate: Int
}
