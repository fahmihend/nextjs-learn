import router, { useRouter } from "next/router"

export default function userDetail() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <p>Detail Page {id}</p>
    )
}