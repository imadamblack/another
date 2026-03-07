export async function POST(request) {
  const url = new URL(request.url);
  const query = url.searchParams;
  const id = query.get('id');

  const res = {
    id,
    brand: 'FBPUFM',
    avt: 2000,
    yearlyTransactions: 1,
    margin: 0.7,
    closeRate: 0.03,
    cac: 0.2,
    plan: 1000,
  }

  const commission = res.plan === 18000 ? 0.1 : 0
  const breakEven = res.plan / (res.margin - res.cac - (res.cac * commission));
  const newClients = Math.ceil(breakEven / res.avt);
  const cacCurr = res.cac * res.avt;
  const cpl = cacCurr * res.closeRate;
  const projectedTransactions = Math.ceil(Math.ceil(newClients / res.closeRate) * 12 * .3 * (res.closeRate)) + newClients

  const a = {
    dbLeads: 0,
    newLeads: Math.ceil(newClients / res.closeRate),
    transactions: newClients,
    avt: res.avt,
    yearlyTransactions: 1,
    ltv: res.avt,
    sales: newClients * res.avt,
    adSpend: Math.ceil(newClients / res.closeRate) * cpl,
    plan: res.plan,
    res: Math.ceil(newClients * res.avt) - breakEven,
  }

  const b = {
    dbLeads: 0,
    newLeads: Math.ceil(newClients / res.closeRate),
    transactions: newClients,
    avt: res.avt,
    yearlyTransactions: res.yearlyTransactions,
    ltv: res.avt * res.yearlyTransactions,
    sales: newClients * res.avt * res.yearlyTransactions,
    adSpend: Math.ceil(newClients / res.closeRate) * cpl,
    plan: res.plan,
    res: Math.ceil(newClients * res.avt * res.yearlyTransactions) - breakEven,
  }

  const c = {
    dbLeads: Math.ceil((newClients / res.closeRate) * 12 * .3),
    newLeads: Math.ceil(newClients / res.closeRate),
    transactions: projectedTransactions,
    avt: res.avt,
    yearlyTransactions: res.yearlyTransactions,
    ltv: res.avt * res.yearlyTransactions,
    sales: projectedTransactions * res.avt * res.yearlyTransactions,
    adSpend: Math.ceil(newClients / res.closeRate) * cpl,
    plan: res.plan,
    res: Math.ceil(projectedTransactions * res.avt * res.yearlyTransactions) - breakEven,
  }

  const response = {
    id: res.id,
    brand: res.brand,
    margin: res.margin,
    marginCurr: res.margin * res.avt,
    cac: res.cac,
    cacCurr: cacCurr,
    closeRate: res.closeRate,
    cpl,
    plan: res.plan,
    yearlyTransactions: res.yearlyTransactions,
    scenarios: [a, b, c]
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}