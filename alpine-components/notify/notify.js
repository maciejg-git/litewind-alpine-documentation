document.addEventListener("alpine:init", () => {
  Alpine.data("notify", (props = {}) => {
    let defaultOptions = {
      delay: 10000,
      static: false,
      dismissable: true,
      variant: "info",
    }

    return {
      notifications: [],
      notifyId: 1000,
      order: props?.order ?? "default",
      maxNotifications: props?.maxNotifications ?? 0,
      stickyAt: props?.stickyAt ?? "end",
      buffer: [],
      notificationsSticky: [],

      init() {
        Alpine.bind(this.$el, {
          '@show-notify.window'() {
            let id = this.$event.detail.id || null
            let rootId = this.$root.id || null
            if (id === null && rootId === null || id === rootId) {
              this.push(this.$event.detail)
            }
          }
        })
      },
      getNotifications() {
        if (this.order === "default" && this.stickyAt === "end") {
          return [...this.notifications, ...this.notificationsSticky]
        }
        if (this.order === "reversed" && this.stickyAt === "end") {
          return [...this.notifications.toReversed(), ...this.notificationsSticky.toReversed()]
        }
        if (this.order === "default" && this.stickyAt === "start") {
          return [...this.notificationsSticky, ...this.notifications]
        }
        if (this.order === "reversed" && this.stickyAt === "start") {
          return [...this.notificationsSticky.toReversed(), ...this.notifications.toReversed()]
        }
      },
      removeById(id) {
        let index = this.notifications.findIndex((i) => id === i.notifyId)
        this.notifications.splice(index, 1)
        if (this.buffer.length) {
          let notify = this.buffer.shift()
          notify.restartTimer()
          this.notifications.push(notify)
        }
      },
      removeStickyById(id) {
        let index = this.notificationsSticky.findIndex((i) => id === i.notifyId)
        this.notificationsSticky.splice(index, 1)
      },
      close() {
        this.removeById(this.notify.notifyId)
      },
      push(notify) {
        let container = this

        let newNotify = {
          header: notify?.header || "",
          text: notify?.text || "",
          delay: notify?.delay ?? props.delay ?? defaultOptions.delay,
          dismissable: notify?.dismissable ?? props.dismissable ?? defaultOptions.dismissable,
          static: notify?.static ?? props.static ?? defaultOptions.static,
          sticky: notify?.sticky ?? false,
          variant: notify?.variant ?? props.variant ?? defaultOptions.variant,
          options: notify?.options ?? props.options ?? null,
          notifyId: this.notifyId,
          timer: null,
        }

        newNotify.restartTimer = function() {
          if (this.static) return null
          if (newNotify.sticky) {
            this.timer = setTimeout(() => container.removeStickyById(this.notifyId), this.delay)
          } else {
            this.timer = setTimeout(() => container.removeById(this.notifyId), this.delay)
          }
        }

        this.notifyId++

        if (newNotify.sticky) {
          newNotify.restartTimer()
          this.notificationsSticky.push(newNotify)
          return
        }

        if (this.maxNotifications > 0 && this.notifications.length >= this.maxNotifications) {
          this.buffer.push(newNotify)
          return
        }

        newNotify.restartTimer()

        this.notifications.push(newNotify)
      }
    }
  })
})
