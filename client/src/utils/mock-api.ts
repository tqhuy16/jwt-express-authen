export default function ({ data, error, duration }: { data?: any; error?: any; duration?: number }): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data)
      } else {
        reject(error)
      }
    }, duration || 300)
  })
}
