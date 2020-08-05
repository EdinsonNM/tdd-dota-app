#`/hooks`

La carpeta `hooks` contiene el listado de hooks de react personalizados

```javascript
 ./hooks
    ├── useTheme.hook.js
    ├── useAnalytics.hook.js
    └── userFriendStatus.hook.js
```

Los hooks deben tener las siguiente nomenclatura `use[Name]Hook`, ejemplo:

```javascript
function useAnalyticsHook(){...}
function useThemeHook(){...}
function useFriendStatusHook(){...}

```

Ejemplo de creación de hooks:

```javascript
function useFriendStatusHook(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}
```

Para usar un hook dentro de un componente se realiza de la siguiente manera:

```javascript
function FriendStatus(props) {
    const isOnline = useFriendStatusHook(props.friend.id);

    if (isOnline === null) {
        return "Loading...";
    }
    return isOnline ? "Online" : "Offline";
}
```
