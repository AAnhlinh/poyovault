
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>WELCOME BACK</Text>
          <Text style={styles.title}>Your Finances</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
      </View>

      <View style={styles.healthCard}>
        <Text style={styles.cardLabel}>FINANCIAL HEALTH</Text>
        <Text style={styles.healthScore}>Good</Text>
        <Text style={styles.mutedText}>
          You're making progress toward your financial goals.
        </Text>
        <View style={styles.progressBackground}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.progressText}>72 / 100</Text>
      </View>

      <Text style={styles.sectionTitle}>Financial Overview</Text>

      <View style={styles.summaryGrid}>
        <View style={styles.summaryCard}>
          <Text style={styles.cardLabel}>MONTHLY INCOME</Text>
          <Text style={styles.amount}>$4,500</Text>
          <Text style={styles.positive}>↑ 4.2% this month</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.cardLabel}>MONTHLY SPENDING</Text>
          <Text style={styles.amount}>$2,850</Text>
          <Text style={styles.mutedText}>63% of income</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.cardLabel}>TOTAL DEBT</Text>
          <Text style={styles.amount}>$18,400</Text>
          <Text style={styles.mutedText}>Across 3 accounts</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.cardLabel}>SAVINGS</Text>
          <Text style={styles.amount}>$6,200</Text>
          <Text style={styles.positive}>2.1 months of expenses</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Monthly Cash Flow</Text>

      <View style={styles.cashFlowCard}>
        <View style={styles.cashFlowRow}>
          <Text style={styles.mutedText}>Income</Text>
          <Text style={styles.positive}>+$4,500</Text>
        </View>
        <View style={styles.cashFlowRow}>
          <Text style={styles.mutedText}>Expenses</Text>
          <Text style={styles.amountSmall}>-$2,850</Text>
        </View>
        <View style={styles.cashFlowRow}>
          <Text style={styles.mutedText}>Debt payments</Text>
          <Text style={styles.amountSmall}>-$900</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.cashFlowRow}>
          <Text style={styles.balanceLabel}>Remaining</Text>
          <Text style={styles.balance}>$750</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Your Financial Assistant</Text>

      <View style={styles.adviceCard}>
        <Text style={styles.adviceTag}>PERSONALIZED INSIGHT</Text>
        <Text style={styles.adviceTitle}>
          Build your emergency fund
        </Text>
        <Text style={styles.mutedText}>
          Your savings currently cover about 2.1 months
          of expenses. Consider working toward a
          three-month emergency fund.
        </Text>
      </View>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 55,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#8B9BB4',
    fontSize: 11,
    letterSpacing: 2,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#243B53',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  healthCard: {
    backgroundColor: '#17263C',
    borderRadius: 18,
    padding: 20,
    marginBottom: 28,
  },
  cardLabel: {
    color: '#8B9BB4',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 10,
  },
  healthScore: {
    color: '#4ADE80',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  mutedText: {
    color: '#9BAAC0',
    fontSize: 13,
    lineHeight: 20,
  },
  progressBackground: {
    height: 7,
    backgroundColor: '#34445A',
    borderRadius: 10,
    marginTop: 18,
  },
  progressFill: {
    width: '72%',
    height: 7,
    backgroundColor: '#4ADE80',
    borderRadius: 10,
  },
  progressText: {
    color: '#8B9BB4',
    fontSize: 11,
    marginTop: 8,
    textAlign: 'right',
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  summaryCard: {
    width: '48%',
    backgroundColor: '#17263C',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    minHeight: 112,
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  positive: {
    color: '#4ADE80',
    fontSize: 12,
  },
  cashFlowCard: {
    backgroundColor: '#17263C',
    padding: 18,
    borderRadius: 15,
    marginBottom: 28,
  },
  cashFlowRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
  },
  amountSmall: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: '#34445A',
    marginVertical: 12,
  },
  balanceLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  balance: {
    color: '#4ADE80',
    fontSize: 20,
    fontWeight: 'bold',
  },
  adviceCard: {
    backgroundColor: '#1B3540',
    borderColor: '#28634E',
    borderWidth: 1,
    borderRadius: 15,
    padding: 18,
    marginBottom: 25,
  },
  adviceTag: {
    color: '#4ADE80',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 10,
  },
  adviceTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bottomSpace: {
    height: 30,
  },
});