function calculateTotal(items, options) {
    let t = 0
    items.forEach(i => {
      t += i.price * i.quan
    })
    t = t - t * (options.dis || 0)
    t = t * 1.1
    t = t + (options.ship || 5)
    return t
  }

  